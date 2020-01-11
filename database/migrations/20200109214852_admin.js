
exports.up = function(knex) {
    return knex.schema.createTable('admins', admins => {
  
    admins
  .increments();
  
  admins
  .string('username', 128)
  .notNullable()
  .unique();
 
  admins
  .string('password', 128)
  .notNullable();
 
  admins
  .integer("stories_id")
  .notNullable()
  .references("id")
  .inTable("stories")
  .onDelete("CASCADE")
  .onUpdate("CASCADE");
    })
    .createTable('stories', stories => {
        stories
        .increments();
        
        stories
        .string('name', 128)
        .unique()
        .notNullable();
        
        stories
        .text('story', 500)
        .notNullable();
        
        stories
        .text('quote', 255)
        .notNullable();
        
        stories
        .integer("admin_id")
        .notNullable()
        .references("id")
        .inTable("admins")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      admins.timestamps(true, true);
      stories
      .integer("portal_id")
      .notNullable()
      .references("id")
      .inTable("portal")
    })

    
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('admins');
    
  };