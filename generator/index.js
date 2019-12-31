module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    "scripts": {
      "standard": "standard-version",
      "release": "bash release.sh",
      "stylelint": "stylelint src/**/*.{less,vue} --fix",
      "prettier": "prettier src/**/*.{js,vue} --write"
    },
    "devDependencies": {
      "@commitlint/cli": "^8.2.0",
      "@commitlint/config-conventional": "^8.2.0",
      "conventional-changelog": "^3.1.18",
      "conventional-changelog-cli": "^2.0.31",
      "standard-version": "^7.0.1",
      "prettier": "^1.19.1",
      "stylelint": "^12.0.1",
      "stylelint-config-standard": "^19.0.0",
      "commitizen": "^4.0.3",
      "cz-customizable": "^6.2.0",
      "lint-staged": "^9.5.0"
    },
    "gitHooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E GIT_PARAMS"
    },
    "config": {
      "commitizen": {
        "path": "node_modules/cz-customizable"
      }
    },
    "lint-staged": {
      "src/**/*.{js,vue,less,scss}": [
        "prettier --write",
        "eslint --fix",
        "stylelint --fix",
        "git add"
      ]
    },
    "standard-version": {
      "issueUrlFormat": "https://issue.xxx.com/{{id}}"
    }
  })

  api.render('./templates')
}
