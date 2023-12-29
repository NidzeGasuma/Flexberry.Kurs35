import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  путь: DS.attr('string'),
  эксФайлы: DS.belongsTo('i-i-s-kurs3-экс-файлы', { inverse: null, async: false }),
  тчЗагр: DS.hasMany('i-i-s-kurs3-тч-загр', { inverse: 'загрФайла', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kurs3-загр-файла.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  путь: {
    descriptionKey: 'models.i-i-s-kurs3-загр-файла.validations.путь.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  эксФайлы: {
    descriptionKey: 'models.i-i-s-kurs3-загр-файла.validations.эксФайлы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тчЗагр: {
    descriptionKey: 'models.i-i-s-kurs3-загр-файла.validations.тчЗагр.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗагрФайлаE', 'i-i-s-kurs3-загр-файла', {
    дата: attr('Дата', { index: 0 }),
    путь: attr('Путь', { index: 1 }),
    тчЗагр: hasMany('i-i-s-kurs3-тч-загр', 'Атрибуты загруженного файла', {
      атрибут: attr('Атрибут', { index: 0 }),
      типАтр: attr('Тип атрибута', { index: 1 }),
      ограничение: attr('Ограничение', { index: 2 }),
      обязательное: attr('Обязательное', { index: 3 })
    })
  });

  modelClass.defineProjection('ЗагрФайлаL', 'i-i-s-kurs3-загр-файла', {
    дата: attr('Дата', { index: 0 }),
    путь: attr('Путь', { index: 1 })
  });
};
