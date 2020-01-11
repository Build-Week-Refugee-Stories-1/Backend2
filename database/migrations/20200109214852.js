
exports.up = function(knex) {
    return knex.schema.createTable('admins', admins => {
  
    admins
  .increments();
  
  admins
  .string('username', 128)
  
  .unique();
 
  admins
  .string('password', 128)
 
 
  // admins
  // .integer("stories_id")
  
  // .references("id")
  // .inTable("stories")
  // .onDelete("CASCADE")
  // .onUpdate("CASCADE");
    })
    .createTable('stories', stories => {
        stories
        .increments();
        
        stories
        .string('name', 128)
        .unique()
        .notNullable();
        
        stories
        .text('story', 255)
        .notNullable();
        
        stories
        .text('quote', 255)
        .notNullable();
        
        stories
        .integer("admin_id")
      
        .references("id")
        .inTable("admins")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
     
      stories
      .integer("portal_id")
      .notNullable()
      .references("id")
      .inTable("portal")
    })
    .createTable('portal', portal => {
        portal
        .increments();
        
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('admins')
      .dropTableIfExists('stories')
      .dropTableIfExists('portal');
    
  };