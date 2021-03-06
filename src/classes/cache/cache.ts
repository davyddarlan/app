import { Injectable } from '@angular/core';
import { Persistence } from '../../classes/persistence/persistence';
import * as hash from '../../classes/hash/md5';

@Injectable()
export class Cache {
    constructor(
        private persistence: Persistence
    ) {}

    public cacheVerify(repositoy: string): boolean {
        if (this.persistence.verifyPersistence(repositoy)) {
            return true;
        } else {
            return false;
        }
    }

    public cacheRegister(repositoy: string, data: string): void {
        if (this.cacheVerify(repositoy)) {
            let currentRepositoryData = hash.md5(this.cacheReturn(repositoy));
            let newRepositoryData = hash.md5(data);
            if (currentRepositoryData != newRepositoryData) {
                this.persistence.setPersistence(repositoy, data);
            }
        } else {
            this.persistence.setPersistence(repositoy, data);
        }
    }

    public cacheReturn(repositoy: string): any {
        return this.persistence.getPersistence(repositoy);
    }

    public cacheClear(repositoy: string): boolean {
        if (this.persistence.removePersistence(repositoy)) {
            return true;
        } else {
            return false;
        }
    }
  }