CREATE TABLE users(
  `id` integer NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP(),
  PRIMARY KEY (`id`)
);
