CREATE MIGRATION m1ox6g6teycpt53cdugmwipykupc53v7otomrvl2l36dmqrc7hrdda
    ONTO m1ytlcoi27eyn5te3tv3jhhbzbsr7tudy3dnszls4h56hlsi3x7hfa
{
  ALTER TYPE default::User {
      CREATE REQUIRED PROPERTY currency: std::int64 {
          SET REQUIRED USING (<std::int64>{0});
      };
  };
};
