import { checkSchema } from 'express-validator';

export const bookValidationSchema = checkSchema({
  title: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Title is required"
    },
    trim: true
  },

  author: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Author is required"
    },
    trim: true
  },

  isbn: {
    in: ["body"],
    notEmpty: {
      errorMessage: "ISBN is required"
    },
    trim: true,
    isLength: {
      options: { min: 10, max: 13 },
      errorMessage: "ISBN must be between 10 and 13 characters"
    }
  },

  category: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Category is required"
    },
    trim: true
  },

  published_year: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Published year is required"
    },
    isInt: {
      options: { min: 0 },
      errorMessage: "Published year must be a valid number"
    }
  },

  publisher: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Publisher is required"
    },
    trim: true
  },

  language: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Language is required"
    },
    trim: true
  },

  pages: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Pages are required"
    },
    isInt: {
      options: { min: 1 },
      errorMessage: "Pages must be at least 1"
    }
  },

  total_copies: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Total copies are required"
    },
    isInt: {
      options: { min: 0 },
      errorMessage: "Total copies must be 0 or greater"
    }
  },

  available_copies: {
    in: ["body"],
    notEmpty: {
      errorMessage: "Available copies are required"
    },
    isInt: {
      options: { min: 0 },
      errorMessage: "Available copies must be 0 or greater"
    },
    custom: {
      options: (value, { req }) => {
        if (value > req.body.total_copies) {
          throw new Error("Available copies cannot exceed total copies");
        }
        return true;
      }
    }
  }
});

