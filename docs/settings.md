## settings.json

Продвинутые настройки. Если у вас нет своих настроек можете взять мои.

``` json
{
 //===========================================
 //============= Theme =======================
 //===========================================
 "workbench.productIconTheme": "fluent-icons",
 "workbench.iconTheme": "material-icon-theme",
 "workbench.activityBar.visible": false,
 "workbench.statusBar.visible": false,
 //===========================================
 //============= Editor ======================
 //===========================================
 "editor.wordSeparators": "`~!@#$%^&*()_-=+[{]}\\|;:'\",.<>/?",
 "editor.quickSuggestions": {
  "strings": true
 },
 "editor.tabSize": 2,
 "editor.detectIndentation": false,
 "editor.insertSpaces": false,
 "editor.linkedEditing": false,
 "editor.smoothScrolling": true,
 "editor.cursorBlinking": "expand",
 "editor.cursorStyle": "line",
 "editor.cursorWidth": 2,
 "editor.cursorSmoothCaretAnimation": true,
 "editor.renderWhitespace": "boundary",
 "editor.wordWrap": "wordWrapColumn",
 "editor.wordWrapColumn": 100,
 "editor.mouseWheelZoom": true,
 "editor.unusualLineTerminators": "auto",
 "editor.glyphMargin": false,
 "editor.guides.bracketPairs": true,
 "editor.minimap.enabled": false,
 //===========================================
 //============= Default Linters =============
 //===========================================
 "editor.formatOnSave": true,
 "editor.formatOnPaste": false,
 "editor.formatOnType": false,
 "editor.formatOnSaveMode": "file",
 "editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true,
  "source.fixAll.eslint": true
 },
 "[typescriptreact]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
  }
 },
 "[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
  }
 },
 "[javascript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
   "source.fixAll.eslint": true
  }
 },
 "[scss]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
   "source.fixAll.stylelint": true
  }
 },
 "[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
 },
 "[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
 },
 "[markdown]": {
  "editor.defaultFormatter": "DavidAnson.vscode-markdownlint",
  "files.trimTrailingWhitespace": false,
  "editor.renderWhitespace": "all",
  "editor.acceptSuggestionOnEnter": "off",
  "editor.parameterHints.enabled": false,
  "editor.quickSuggestions": {
   "comments": "off",
   "strings": "off",
   "other": "off"
  },
  "editor.snippetSuggestions": "none"
 },
 //===========================================
 //============= Linters =====================
 //===========================================
 "eslint.alwaysShowStatus": true,
 "eslint.validate": [
  "javascript",
  "javascriptreact",
  "typescript",
  "typescriptreact"
 ],
 "css.validate": false,
 "scss.validate": false,
 "stylelint.enable": true,
 "stylelint.validate": ["css", "scss"],
 "stylelint.packageManager": "pnpm",
 "eslint.packageManager": "pnpm",
 "prettier.requireConfig": true,
 //===========================================
 //============ Explorer =====================
 //===========================================
 "explorer.confirmDelete": false,
 "explorer.confirmDragAndDrop": false,
 "explorer.openEditors.visible": 0,
 "explorer.compactFolders": false,
 //===========================================
 //============ Terminal =====================
 //===========================================
 // Ensure enough terminal history is preserved when running tests.
 "terminal.integrated.scrollback": 10000,
 //===========================================
 //============= security ====================
 //===========================================
 "security.workspace.trust.untrustedFiles": "open",
 //===========================================
 //============= Other =======================
 //===========================================
 "git.enableSmartCommit": true,
 "git.confirmSync": false,
 "git.autofetch": true,
 "npm.packageManager": "pnpm",
 "debug.javascript.unmapMissingSources": true,
 "breadcrumbs.enabled": true,
 "workbench.settings.enableNaturalLanguageSearch": false,
 "diffEditor.ignoreTrimWhitespace": false,
 "javascript.updateImportsOnFileMove.enabled": "always",
 "typescript.updateImportsOnFileMove.enabled": "always",
 "terminal.integrated.defaultProfile.windows": "Git Bash",
 //===========================================
 //============= TS ==========================
 //===========================================
 "typescript.tsdk": "node_modules\\.pnpm\\typescript@4.9.4\\node_modules\\typescript\\lib",
 "typescript.enablePromptUseWorkspaceTsdk": true,
 "typescript.surveys.enabled": false,
 //===========================================
 //============= Extensions ==================
 //===========================================
 "reactSnippets.settings.typescriptPropsStatePrefix": "interface",
 "reactSnippets.settings.importReactOnTop": false,
 "reactSnippets.settings.typescript": true,
 // Configure todo-tree to exclude node_modules, dist, and compiled.
 "todo-tree.filtering.excludeGlobs": [
  "**/node_modules",
  "**/dist",
  "**/compiled"
 ],
 // Match TODO-APP in addition to other TODOs.
 "todo-tree.general.tags": [
  "BUG",
  "HACK",
  "FIXME",
  "TODO",
  "XXX",
  "[ ]",
  "[x]",
  "TODO-APP"
 ],
 "svg.preview.mode": "svg",
 //===========================================
 //============= Files =======================
 //===========================================
 "files.autoSave": "onFocusChange",
 "files.eol": "\n",
 "files.insertFinalNewline": true,
 "files.trimFinalNewlines": true,
 "files.trimTrailingWhitespace": true,
 "search.exclude": {
  "**/._.DS_Store": true,
  "**/package-lock.json": true,
  "**/node_modules": true,
  "**/.gitlab-ci.yml": true,
  "**/docker": true,
  "**/.storybook": true,
  "**/.next": true,
  "**/*.log": true,
  "**/*.log*": true,
  "**/bower_components": true,
  "**/dist": true,
  "**/elehukouben": true,
  "**/.git": true,
  "**/.gitignore": true,
  "**/.svn": true,
  "**/.DS_Store": true,
  "**/.idea": true,
  "**/.vscode": false,
  "**/yarn.lock": true,
  "**/tmp": true,
  "out": true,
  "dist": true,
  "CHANGELOG.md": true,
  "examples": true,
  "res": true,
  "screenshots": true,
  "yarn-error.log": true,
  "**/pnpm-lock.yaml": true,
  "**/.yarn": true,
  "**/.tsconfig.json": true
 },
 "files.exclude": {
  "**/.cache": true,
  "**/.editorconfig": false,
  "**/.eslintcache": true,
  "**/bower_components": true,
  "**/.idea": true,
  "**/tmp": true,
  "**/.svn": true,
  "**/.hg": true,
  "**/CVS": true,
  "**/.DS_Store": true,
  "**/._.DS_Store": true,
  "**/node_modules": false,
  "**/.next": true,
  "**/.git": true
 },
 "files.watcherExclude": {
  "**/.git/objects/**": true,
  "**/.git/subtree-cache/**": true,
  "**/.vscode/**": true,
  "**/node_modules/**": true,
  "**/tmp/**": true,
  "**/bower_components/**": true,
  "**/dist/**": true,
  "**/yarn.lock": true
 },
 //===========================================
 //============= cSpell ======================
 //===========================================
 "cSpell.enabledLanguageIds": ["markdown", "plaintext", "text", "yml"],
 "cSpell.language": "en,ru",
 "cSpell.enableFiletypes": [
  "jsonc",
  "typescript",
  "typescriptreact",
  "json",
  "javascript"
 ],
 "cSpell.userWords": [
  "abouts",
  "antv",
  "brotli",
  "browserslist",
  "codemirror",
  "commitlint",
  "cropperjs",
  "echarts",
  "EDITMSG",
  "esnext",
  "esno",
  "hookform",
  "iconify",
  "INTLIFY",
  "licensen",
  "licensens",
  "lintstagedrc",
  "logicflow",
  "mockjs",
  "nextjs",
  "nprogress",
  "pinia",
  "preinstall",
  "qrcode",
  "scrollback",
  "sider",
  "sortablejs",
  "stylelint",
  "svgr",
  "tailwindcss",
  "tanstack",
  "tinymce",
  "trivago",
  "vben",
  "vditor",
  "vitejs",
  "vueuse",
  "wemake",
  "windi",
  "zxcvbn",
  "Страпи"
 ]
}
```
