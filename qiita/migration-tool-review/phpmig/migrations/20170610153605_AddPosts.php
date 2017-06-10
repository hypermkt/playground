<?php

use Phpmig\Migration\Migration;

class AddPosts extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $sql = "
            CREATE TABLE posts(
                `id` integer NOT NULL AUTO_INCREMENT,
                `content` TEXT NOT NULL,
                `created_at` datetime DEFAULT CURRENT_TIMESTAMP(),
                PRIMARY KEY (`id`)
            );
";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $sql = "DROP TABLE posts;";
        $container = $this->getContainer(); 
        $container['db']->query($sql);
    }
}
