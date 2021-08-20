import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

    async getAll() {
        return await this.taskModel.find().exec()
    }

    async getById(id: string) {
        return this.taskModel.findById(id).exec()
    }

    async create(task: Task) {
        const created = new this.taskModel(task)

        return await created.save()
    }

    async update(id: string, task: Task) {
        await this.taskModel.updateOne({ _id: id }, task).exec()

        return this.getById(id)
    }

    async delete(id: string) {
        return await this.taskModel.deleteOne({ _id: id }).exec()
    }
}
