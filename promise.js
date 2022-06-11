const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const sort = (data, emo) => {
  let x=0;
  data.forEach(item => {
    if (item?.hasil === emo) {
      x+=1;
    }
  });
  return x;
}

const promiseOutput = async (emosi) =>{
  try{
    let temp = 0;
    const [IXX,VGC] = await Promise.all([promiseTheaterIXX(),promiseTheaterVGC()])
    temp += sort(IXX,emosi)
    temp += sort(VGC,emosi)
    return temp;
  }
  catch(error){
    console.log(error);
  }
};


module.exports = {
  promiseOutput,
};
