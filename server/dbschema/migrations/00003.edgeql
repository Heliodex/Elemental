CREATE MIGRATION m1jxpymnah7z3obipyvvc77cyjaznj3bk6j6ei7dbfwo7v6vrbjj7a
    ONTO m1ox6g6teycpt53cdugmwipykupc53v7otomrvl2l36dmqrc7hrdda
{
  ALTER TYPE default::User {
      ALTER PROPERTY currency {
          SET default := 0;
      };
  };
};
