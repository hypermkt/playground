
-- +goose Up
-- SQL in section 'Up' is executed when this migration is applied

CREATE TABLE posts(
  `id` integer NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`)
);

-- +goose Down
-- SQL section 'Down' is executed when this migration is rolled back

DROP TABLE posts;
