import * as Yup from "yup";

export const formSchema = Yup.object({
  artist: Yup.string()
    .max(80, "Artist cannot exceed 80 characters")
    .matches(
      /^[a-zA-Z\s-]*$/,
      "Artist must contain only Latin letters, spaces, or hyphens"
    )
    .test(
      "min-length",
      "Artist must be at least 2 characters",
      function (value) {
        if (!value || value.length === 0) {
          return true; // Accepts empty string
        }
        return value.length >= 2;
      }
    ),
  genres: Yup.array().max(3, "You can select up to 3 genres"),
  decade: Yup.string().required("You can select up to 1 decade"),
  country: Yup.string(),
});
