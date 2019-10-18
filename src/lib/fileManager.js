
import RNFetchBlob from 'rn-fetch-blob';

const { fs } = RNFetchBlob;
const dirs = fs.dirs;

let FileManager = {};

FileManager.write = async (path,folderName, file, content, charCode)=> {

    try {
        let _path = dirs[path] + '/' + folderName;
        let existLogPath = await fs.exists(_path);

        if (!existLogPath) {
            await fs.mkdir(_path);
        }
        _path += '/' + file;
        let existFile = await fs.exists(_path);
        if (existFile) {
            await fs.appendFile(_path, content, charCode);
        } else {
            await fs.createFile(_path, content, charCode);
        }
    } catch (err) {
        //console.log('logFileError:'+ err);
    }

};

FileManager.read = async (path,folderName, file, charCode)=> {
    
    try {
        let _path = dirs[path] + '/' + folderName;

        let existLogPath = await fs.exists(_path);
        if (!existLogPath) {
            await fs.mkdir(_path);
        }
        _path += '/' + file;

        let existFile = await fs.exists(_path);
        if (existFile) {
            return await fs.readFile(_path, charCode);
        }
    } catch (err) {
        //console.log('logFileError:'+ err);
    }

};

FileManager.statistic = async (path,folderName)=> {

    try {
        let _path =folderName ? dirs[path] + '/' + folderName:dirs[path];
        let existLogPath = await fs.exists(_path);
        if (existLogPath) {
            return await fs.lstat(_path);
        }
    } catch (err) {
        //console.log('logFileError Statistic Error:'+ err);
    }

};


FileManager.statisticSize = (path,folderName) => {
    return new Promise(async (resolve,reject) => {
        let result = await FileManager.statistic(path,folderName);
        let total = 0;
        try {
            if (result) {
                for (let file of result){
                    if(file.type === 'directory'){
                        let innerFolderName = folderName? folderName+'/'+file.filename: file.filename;
                        let num = await FileManager.statisticSize(path,innerFolderName);
                        total += (parseFloat(num) + parseFloat(file.size));
                        
                    }else{
                        total += parseFloat(file.size);
                    }
                }
            }
            resolve(total);
        } catch (err) {
            reject('Statistic log size Error:'+ err);
        }
    })
}



FileManager.statisticFolderSize = (path,folderNameArray) => {
    return new Promise(async (resolve,reject) => {
        let result = await FileManager.statistic(path);
        let total = 0;
        try {
            if (result) {
                for (let file of result){
                    
                    if(file.type === 'directory' && folderNameArray.indexOf(file.filename) > -1){
                        let num = await FileManager.statisticSize(path,file.filename);
                        total += (parseFloat(num) + parseFloat(file.size));
                        
                    }else{
                        total += parseFloat(file.size);
                    }
                    
                }
            }
            resolve(total);
        } catch (err) {
            reject('Statistic log size Error:'+ err);
        }
    })
}

FileManager.clearWithIgnoreFolder = async (path,ignoreFolderName,cb) => {
    try {
        let existLogPath = await fs.exists(dirs[path])
        if(existLogPath){
            let result = await FileManager.statistic(path);
            if(result){
                for (let file of result){
                    if(file.filename !== ignoreFolderName){
                        await FileManager.clear(path,file.filename)
                    }
                }
                cb && cb()
            }
        }
        
    }catch(err){

    }
}


FileManager.clear = async (path,folderName,cb)=> {

    try {
        let _path = folderName ? dirs[path] + '/' + folderName:dirs[path];
        let existLogPath = await fs.exists(_path);

        if (existLogPath) {
            await fs.unlink(_path);
        }
        cb && cb();
    } catch (err) {
        //console.log('logFileError clear Error:'+ err);
    }

};



FileManager.clearFolder = async (path,folderNameArray,cb,errerCb)=> {
    try {
        let _path = dirs[path];
        let existLogPath = await fs.exists(_path);
        if(existLogPath){
            let result = await FileManager.statistic(path);
            if(result){
                    for (let file of result){
                        if(folderNameArray && folderNameArray.length >0){
                            if(file.type === 'directory' && folderNameArray.indexOf(file.filename) > -1){
                                await fs.unlink(_path + '/'+ file.filename)
                            }
                        }else{
                            await fs.unlink(_path + '/'+ file.filename)
                        }
                    }
                    cb && cb()
            }else{
                errerCb && errerCb()
            }

            
        }else{
            errerCb && errerCb()
        }
    } catch (err){
        errerCb && errerCb()
    }


};

export default FileManager;
