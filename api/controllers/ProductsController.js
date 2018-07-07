/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const algoliasearch  = require('algoliasearch')

const client = algoliasearch(sails.config.algolia.id, sails.config.algolia.key);
const index = client.initIndex('product_mala');

module.exports = {

    find: (req, res) => {
        index.search({
            //filters: 'name:"'+req.query.name+'" AND internet_sale > 0'
            filters: 'name:"'+req.query.name+'"'
  
          }, function(err, content) {
            res.json(content.hits)
  
            //console.log(content.hits);
          });
      },


  

};

