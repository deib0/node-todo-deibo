'use strict';
const fs = jest.genMockFromModule('fs');
const _fs=jest.requireActual('fs')// 引入实际的fs
// 读
const readMocks={}
fs.setReadMock=(path,error,data)=>{
    readMocks[path]=[error,data]
}
fs.readFile=(path,options,callback)=>{
    if(callback===undefined){callback=options}
    if(path in readMocks){
        callback(readMocks[path][0],readMocks[path][1])
    }else{
        _fs.readFile(path,options,callback)
    }
}
// 写
const writeMocks={}
fs.setWriteFileMock=(path,fn)=>{
    writeMocks[path]=fn
}
fs.writeFile=(path,data,options,callback)=>{
    if(path in writeMocks){
        writeMocks[path](path,data,options,callback)
    }else{
        _fs.writeFile(path,data,options,callback)
    }
}

module.exports = fs;