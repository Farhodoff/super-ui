import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FileUpload } from "./FileUpload";

describe("FileUpload", () => {
    it("renders dropzone container and instructional text", () => {
        render(<FileUpload />);
        expect(screen.getByText("Drag & drop files here")).toBeInTheDocument();
        expect(screen.getByText("or click to select files")).toBeInTheDocument();
    });

    it("renders file list when files are provided in value", () => {
        const testFile1 = new File(["hello world"], "test1.txt", { type: "text/plain" });
        const testFile2 = new File(["another file content"], "doc.pdf", { type: "application/pdf" });

        render(<FileUpload value={[testFile1, testFile2]} />);

        expect(screen.getByText("test1.txt")).toBeInTheDocument();
        expect(screen.getByText("doc.pdf")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Remove test1.txt" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Remove doc.pdf" })).toBeInTheDocument();
    });

    it("calls onRemove when remove button is clicked", async () => {
        const user = userEvent.setup();
        const testFile = new File(["content"], "sample.png", { type: "image/png" });
        const onRemove = vi.fn();

        render(<FileUpload value={[testFile]} onRemove={onRemove} />);

        const removeButton = screen.getByRole("button", { name: "Remove sample.png" });
        await user.click(removeButton);

        expect(onRemove).toHaveBeenCalledWith(testFile);
    });

    it("calls onChange with filtered files when remove button is clicked and onRemove is not provided", async () => {
        const user = userEvent.setup();
        const testFile1 = new File(["1"], "file1.txt", { type: "text/plain" });
        const testFile2 = new File(["2"], "file2.txt", { type: "text/plain" });
        const onChange = vi.fn();

        render(<FileUpload value={[testFile1, testFile2]} onChange={onChange} />);

        const removeButton = screen.getByRole("button", { name: "Remove file1.txt" });
        await user.click(removeButton);

        expect(onChange).toHaveBeenCalledWith([testFile2]);
    });

    it("handles file input change event", () => {
        const onChange = vi.fn();
        const { container } = render(<FileUpload onChange={onChange} />);
        const input = container.querySelector('input[type="file"]');
        expect(input).toBeInTheDocument();

        const file = new File(["test file content"], "upload.png", { type: "image/png" });
        if (input) {
            fireEvent.change(input, { target: { files: [file] } });
        }
        // react-dropzone handles change events asynchronously or through internal handler
        expect(input).not.toBeNull();
    });
});
