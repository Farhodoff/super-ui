const fs = require("fs");
const path = require("path");

const sourceDir = path.resolve(__dirname, "../src/components/ui");
const targetDir = path.resolve(__dirname, "../cli/templates/components/ui");

if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory does not exist: ${sourceDir}`);
    process.exit(1);
}

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);
let copiedCount = 0;

for (const file of files) {
    // Skip test and story files
    if (file.includes(".test.") || file.includes(".stories.")) {
        continue;
    }

    if (file.endsWith(".tsx") || file.endsWith(".ts")) {
        const srcFilePath = path.join(sourceDir, file);
        const destFilePath = path.join(targetDir, file);

        fs.copyFileSync(srcFilePath, destFilePath);
        copiedCount++;
    }
}

console.log(`Successfully synced ${copiedCount} UI component files to ${targetDir}`);
