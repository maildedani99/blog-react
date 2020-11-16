CREATE TABLE posts (
  `id` bigint unsigned auto_increment,
  `title` varchar(255) not null,
  `description` varchar(255) null,
  `content` text null,
  `icon_id` int(20) unsigned,
  `created_at` timestamp null,
  `updated_at` timestamp null,
  PRIMARY KEY(id)
);