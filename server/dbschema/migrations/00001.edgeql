CREATE MIGRATION m1ytlcoi27eyn5te3tv3jhhbzbsr7tudy3dnszls4h56hlsi3x7hfa
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE REQUIRED PROPERTY name: std::str;
  };
};
