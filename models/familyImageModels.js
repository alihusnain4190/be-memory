const db=require('../db/connection');
exports.getAllFamilyImageModel=()=>{
  return db.select('*').from("family-image");

}
