import { Theme } from "@aws-amplify/ui-react";

export const theme: Theme = {
  name: "cabinTheme",
  tokens: {
    colors: {},
    components: {
      heading: {},
      rating: {},
      fieldcontrol: {
        borderColor: { value: "{colors.orange.40}" },
        borderRadius: { value: "{radii.xl}" },
      },
      button: {
        color: { value: "{colors.orange.90}" },
        borderRadius: {
          value: "{radii.xl}",
        },
      },
      authenticator: {
        router: {
          borderWidth: { value: "0" },
        },
      },
    },
  },
};
