module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/web/",
        "packages/ui/",
        "packages/config/",
        "packages/tsconfig/",
        "packages/firebase-client/",
        "packages/firebase-client-admin/",
      ],
    },
  },
};
