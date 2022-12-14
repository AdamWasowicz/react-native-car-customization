import React from 'react';
import * as SQLite from 'expo-sqlite';
import { DB_NAME, INFO, ID, KEY_ID, VALUE_OF, JWT } from './constants';
import { SQLResultSet } from 'expo-sqlite';
import { InfoTable } from './models';

export class AppStorageClient {
    private databse = SQLite.openDatabase(DB_NAME);

    public initDb = (): Promise<void> => {
        const promise  = new Promise<void>((resolve, reject) => {
            this.databse.transaction((tr) => {
                tr.executeSql(`CREATE TABLE IF NOT EXISTS ${INFO} (
                    ${ID} INTEGER PRIMARY KEY NOT NULL,
                    ${KEY_ID} TEXT NOT NULL,
                    ${VALUE_OF} TEXT NOT NULL)`,
                [],
                () => resolve(),
                (_, error) => {
                    reject(error);
                    return false;
                })
            })
        });

        return promise;
    }

    public getValueByKey = (key: string): Promise<SQLResultSet> => {
        const promise = new Promise<SQLResultSet>((resolve, reject) => {
            this.databse.transaction((tr) => {
                tr.executeSql(`SELECT * FROM ${INFO} WHERE ${KEY_ID} LIKE \'${key}\'`,
                [],
                (_, result) => 
                {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                    return false;
                })
            })
        })

        return promise;
    }

    public insertKey = async (key: string, value: string): Promise<void> => {
        await this.deleteKey(key);

        const promise = new Promise<void>((resolve, reject) => {
            this.databse.transaction((tr) => {
                tr.executeSql(`INSERT INTO ${INFO} (${KEY_ID}, ${VALUE_OF}) VALUES (?, ?)`,
                [key, value],
                (_, result) => 
                {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                    return false;
                })
            })
        })

        return promise;
    }

    public deleteKey = (key: string): Promise<void> => {
        const promise = new Promise<void>((resolve, reject) => {
            this.databse.transaction((tr) => {
                tr.executeSql(`DELETE FROM ${INFO} WHERE ${KEY_ID} LIKE \'${key}\'`,
                [],
                (_, result) => 
                {
                    resolve();
                },
                (_, error) => {
                    reject(error);
                    return false;
                })
            })
        })

        return promise;
    }

    public getJWT = async () => {
        const jwt = await this.getValueByKey(JWT);
        const it: InfoTable[] = jwt.rows._array as unknown as InfoTable[];
        if (it.length == 0)
            return null;
            
        return it[0].VALUE_OF;
    }

    constructor() {
        this.initDb();
    }
}

const useAppStorage  = () => {
    return new AppStorageClient();
}

export default useAppStorage;