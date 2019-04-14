/**
 * EXAMPLE CUSTOM ZULIPBOT CONFIGURATION — Zulip
 *
 * See https://github.com/zulip/zulipbot/wiki/configuration for detailed
 * explanations on each option.
 */

exports.issues = {
  commands: {
    assign: {
      claim: ["claim"],
      abandon: ["abandon", "unclaim", "abort"],
      limit: 1,
      newContributors: {
        permission: "pull",
        restricted: 1,
        warn: {
          labels: ["help wanted", "good first issue"],
          force: false
        }
      }
    },
    label: {
      add: ["label", "add"],
      remove: ["unlabel", "remove"]
    }
  },
  area: {
    /** 
     * Commenting this out to (and not removing it) because we might 
     * need it later, albeit on a smaller scale.

    labels: new Map([
      ["area: compose/send", "server-compose"],
      ["area: emoji", "server-emoji"],
      ["area: message list", "server-message-view"],
      ["area: notifications", "server-notifications"],
      ["area: onboarding", "server-onboarding"],
      ["area: realtime", "server-misc"],
      ["area: tools", "server-tooling"]
    ]),
    */
    references: true
  }
};

exports.pulls = {
  status: {
    mergeConflicts: {
      label: "has conflicts",
      comment: false
    },
    wip: "[WIP]",
    size: {
      labels: new Map([
        ["size: XS", 0],
        ["size: S", 5],
        ["size: M", 25],
        ["size: L", 50],
        ["size: XL", 100]
      ]),
      exclude: ["generatedEs3.js", "./static/"]
    }
  },
  references: {
    required: true,
    labels: {
      exclude: [
        "in progress",
        "good first issue",
        "help wanted"
      ]
    }
  },
  ci: {
    travis: "travis updates"
  }
};

exports.activity = {
  inactive: "inactive",
  check: {
    repositories: [
      "zulip/zulip-mobile"
    ],
    interval: 6,
    reminder: 10,
    limit: 4
  },
  issues: {
    inProgress: "in progress",
    clearClosed: true
  },
  pulls: {
    autoUpdate: false,
    reviewed: {
      label: "reviewed"
    },
    needsReview: {
      label: "needs review",
      ignore: true
    }
  }
};

exports.eventsDelay = 3;
