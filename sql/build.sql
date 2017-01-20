-- run this before initally starting up your server!
-- Quiz table
CREATE TABLE quizzes(
  id SERIAL UNIQUE,
  title varchar(250),
  description text
);

-- Question table
CREATE TABLE questions(
  quiz_id integer,
  question_id SERIAL UNIQUE,
  question_text text, -- the actual question
  question_description text -- description
);

-- Answer table
CREATE TABLE answers(
  question_id integer,
  answer_id SERIAL UNIQUE,
  answer_text text,
  answer_correct boolean, -- true for correct, false for incorrect
  answer_description text -- description on why the answer is correct or incorrect
);

-- Accuracy table
CREATE TABLE accuracy(
    question_id integer,
    attempts integer,
    correct integer
);
