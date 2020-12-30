const { promisify } = require("util");
const { relative } = require("path");

const render = promisify(require("node-sass").render);
const glob = promisify(require("glob"));

describe("css.scss", () => {
  it("builds without errors", async () => {
    await expect(render({ file: "css.scss" })).resolves.not.toThrow();
  });

  it("includes all scss files", async () => {
    const [scssResult, scssFiles] = await Promise.all([
      render({ file: "css.scss" }),
      glob("{,!(node_modules)/**/}*.scss"),
    ]);

    const includedFiles = scssResult.stats.includedFiles.map((filePath) =>
      relative(__dirname, filePath).replace(/\\/g, "/")
    );

    const excludedFiles = scssFiles.filter(
      (filePath) => !includedFiles.includes(filePath)
    );

    expect(excludedFiles).toHaveLength(0);
  });
});
