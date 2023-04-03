/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Vicky Cristina Barcelona', genre: 'drama', release_date: '2008-08-15', watched: 'false', to_watch: 'false'},
    {title: 'Orfeu Negro', genre: 'drama', release_date: '1959-12-21', watched: 'false', to_watch: 'false'},
    {title: 'Midnight in Paris', genre: 'drama', release_date: '2011-05-20', watched: 'false', to_watch: 'false'},
    {title: 'Mean Girls', genre: 'comedy', release_date: '2004-04-30', watched: 'false', to_watch: 'false'},
    {title: 'Pride and Prejudice', genre: 'drama', release_date: '2005-11-11', watched: 'false', to_watch: 'false'},
    {title: 'Midsommar', genre: 'thriller', release_date: '2019-07-03', watched: 'false', to_watch: 'false'},
  ]);
};
