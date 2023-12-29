import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kurs3-тч-настр', 'Unit | Model | i-i-s-kurs3-тч-настр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kurs3-выгр-док',
    'model:i-i-s-kurs3-еди-изм',
    'model:i-i-s-kurs3-загр-файла',
    'model:i-i-s-kurs3-конвер-фай',
    'model:i-i-s-kurs3-конвертация',
    'model:i-i-s-kurs3-настр-конв',
    'model:i-i-s-kurs3-расширение',
    'model:i-i-s-kurs3-тч-загр',
    'model:i-i-s-kurs3-тч-настр',
    'model:i-i-s-kurs3-экс-файлы',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
