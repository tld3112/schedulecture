/**
 *
 * Created by tech4GT on 8/25/17.
 */
const models = require('../models')
module.exports = {

    newBatch: function (name, startDate, endDate, size, courseId, centreId, teacherId, done) {
        models.Batches.create({
            name: name,
            startDate: startDate,
            endDate: endDate,
            size: size,
            status : "active",
            courseId : courseId,
            centreId : centreId,
            teacherId : teacherId
        }).then(function (data) {
            done(null,data)
        }).catch(function (err) {
            if (err) done(err);
        });
    },
    getAll: function (conditions, done) {
        models.Batches.findAll({
            where : conditions
        }).then(function (data) {
            done(null,data)
        }).catch(function (err) {
            if (err) done(err);
        });
    },
    search: function (id, done) {
        models.Batches.findOne({
            where: {
                id: id
            }
        }).then(function (data) {
            done(null,data);
        }).
        catch(function (err) {
            if (err) done(err);
        });
    },
    edit : function (id,obj, done) {
        models.Batches.findOne({
            where : {
                id : id
            }
        }).then(function (data) {
            if(!data){
                return done(null,null)
            }
            data.update(obj).then(function (resData) {
                done(null,resData);
            }).catch(function (err) {
                if(err) done(err);
            })
        }).catch(function (err) {
            if(err) done(err);
        });
    },
    archiveBatch : function (id, done) {
        models.batches.findOne({
            where : {
                id : id
            }
        }).then(function (data) {
            if(!data){
                return done(null,null)
            }
            data.update({
                status : "archived"
            }).then(function (resData) {
                done(null,resData);
            }).catch(function (err) {
                if(err) done(err);
            })
        }).catch(function (err) {
            if(err) done(err);
        });
    },
    deleteBatch : function (id, done) {
        models.Batches.destroy({
            where : {
                id : id
            }
        }).then(function (data) {
            done(null,data)
        }).catch(function (err) {
            if(err) done(err);
        });
    },
    getLectures : function (id, done) {
        models.Lectures.findAll({
            where : {
                batchId : id
            }
        }).then(function (data) {
            done(null,data)
        }).catch(function (err) {
            if(err) done(err);
        });
    }
}