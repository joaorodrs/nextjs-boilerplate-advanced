module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "New reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter your component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.ts",
        templateFile: "templates/component/index.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "templates/component/stories.tsx.hbs",
      },
    ],
  });
};