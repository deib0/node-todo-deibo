'use strict';
// filename'postfix can use spec,test,unit
const fs = require('fs')
const db =require('../db.js')
jest.mock('fs')// mock fs

describe('db',()=>{
    // test read
    it('can read',async ()=> {
        const data=[{title:'hi',done:true}]
        fs.setReadMock('/xxx',null,JSON.stringify(data))
        const list =await db.read('/xxx')
        expect(list).toStrictEqual(data)
    })
    // test write
    it('can write',async ()=>{
         let fakeFile
         fs.setWriteFileMock('/yyy',(path,data,callback)=>{
            fakeFile =data
            callback(null)
         })
         const list =[{title:'foo',done:true},{title:'bar',done:true}]
         await db.write(list,'/yyy')
         expect(fakeFile).toBe(JSON.stringify(list)+'\n')
   })
})
