<template>
  <div id="app">
    <nav class="navTab">
      <div class="navTab__item" :class="{ 'navTab__item-active': navTab===0}">Инфо</div>
      <div class="navTab__item" :class="{ 'navTab__item-active': navTab===1}">Адрес</div>
      <div class="navTab__item" :class="{ 'navTab__item-active': navTab===2}">Паспорт</div>
    </nav>
    <form action="#" class="form">
      <fieldset class="form-wrp" v-if="navTab === 0">
        <label class="form__item">
          <p class="form__item-title">
            <span class="form__item-req">*</span>
            Фамилия:
          </p>
          <input type="text" v-model.trim="$v.user.info.lastName.$model" :class="{ 'form__item-error': ($v.user.info.lastName.$error) }">
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.info.lastName.$error) }">Фамилия должна состоять минимум из 2 букв</p>
        </label>
        <label class="form__item">
          <p class="form__item-title">
            <span class="form__item-req">*</span>
            Имя:
          </p>
          <input type="text" v-model.trim="$v.user.info.firstName.$model" :class="{ 'form__item-error': $v.user.info.firstName.$error }">
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.info.firstName.$error) }">Имя должно состоять минимум из 2 букв</p>
        </label>
        <label class="form__item">
          <p class="form__item-title">
            Отчество:
          </p>
          <input type="text" v-model.trim="$v.user.info.middleName.$model" :class="{ 'form__item-error': $v.user.info.middleName.$error }">
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.info.middleName.$error) }">Отчество должно состоять минимум из 2 букв</p>
          </label>
        <label class="form__item">
          <p class="form__item-title">
            <span class="form__item-req">*</span>
            Дата рождения:
          </p>
          <input type="date" v-model.trim="$v.user.info.date.$model" :class="{ 'form__item-error': $v.user.info.date.$error }">
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.info.date.$error) }">Обязательное поле</p>
          </label>
        <label class="form__item">
          <p class="form__item-title">
          <span class="form__item-req">*</span>
          Номер телефона:</p>
          <input type="number" v-model.number="$v.user.info.phone.$model" :class="{ 'form__item-error': $v.user.info.phone.$error }">
        </label>
        <div class="form__item form__item-mini">
          <p class="form__item-title">Пол:</p>
          <div class="form__item-box">
            <label>Мужской<input name="sex" type="radio" value="male" v-model.trim="user.sex" ></label>
            <label>Женский<input name="sex" type="radio" value="female" v-model.trim="user.info.sex" ></label>
          </div>
        </div>
        <label class="form__item form__item-r">
          <p class="form__item-title">
            <span class="form__item-req">*</span>
            Группа клиентов:
          </p>
          <input type="text" readonly class="form__item-multi" @click="openSelect()" v-model.trim="user.info.group" :class="{ 'form__item-error': $v.user.info.group.$error }">
          <div class="form__item-multi-open" :class="{ 'form__item-error': $v.user.info.group.$error }">
            <label><input type="checkbox" value="VIP" v-model.trim="user.info.group"> VIP</label>
            <label><input type="checkbox" value="Проблемные" v-model.trim="user.info.group"> Проблемные</label>
            <label><input type="checkbox" value="ОМС"  v-model.trim="user.info.group"> ОМС</label>
          </div>
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.info.group.$error) }">Обязательное поле</p>
        </label>
        <label class="form__item">
          <p class="form__item-title">Лечащий врач:</p>
          <select v-model.trim="user.info.doctor">
            <option></option>
            <option>Иванов</option>
            <option>Захаров</option>
            <option>Чернышева</option>
          </select>
        </label>
        <label class="form__item form__item-mini">
          <p class="form__item-title">Не отправлять СМС</p>
          <input type="checkbox" v-model.trim="user.info.sms" >
        </label>
        <div class="form__item-submit">
          <p class="form__item-title">
          <span class="form__item-req">*</span>
          Поле обязательное для заполнения.
          </p>
          <button class="form__btn" type="button" @click="onSubmitNext()">Дальше</button>
        </div>
      </fieldset>
      <fieldset class="form-wrp" v-if="navTab === 1">
        <label class="form__item">
          <p class="form__item-title">Индекс:</p>
          <input type="number" v-model.trim="$v.user.address.index.$model" :class="{ 'form__item-error': ($v.user.address.index.$error) && navTab === 1}">
          </label>
        <label class="form__item">
          <p class="form__item-title">Страна:</p>
          <input type="text" v-model.trim="$v.user.address.country.$model" :class="{ 'form__item-error': ($v.user.address.country.$error ) }">
          </label>
        <label class="form__item">
          <p class="form__item-title">Область:</p>
          <input type="text" v-model.trim="user.address.region">
          </label>
        <label class="form__item">
          <p class="form__item-title">
          <span class="form__item-req">*</span>
          Город:</p>
          <input type="text" v-model.trim="$v.user.address.city.$model" :class="{ 'form__item-error': ($v.user.address.city.$error)  }" >
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.address.$error ) }">Обязательное поле</p>
          </label>
        <label class="form__item">
          <p class="form__item-title">Улица:</p>
          <input type="text" v-model.trim="user.address.street.$model">
          </label>
        <label class="form__item">
          <p class="form__item-title">Дом:</p>
          <input type="text" v-model.trim="user.address.house.$model">
          </label>
          <div class="form__item-submit">
          <p class="form__item-title">
          <span class="form__item-req">*</span>
          Поле обязательное для заполнения.
          </p>
          <div class="form__item-submit-btns">
           <button class="form__btn" @click="navTab--">Назад</button>
          <button class="form__btn" @click="onSubmitNext()">Дальше</button>
          </div>
        </div>
      </fieldset>
      <fieldset class="form-wrp" v-if="navTab === 2">
        <label class="form__item">
          <p class="form__item-title">
          <span class="form__item-req">*</span>
          Тип документа:
          </p>
          <select v-model.trim="user.passport.document" :class="{ 'form__item-error': $v.user.passport.document.$error }">
            <option></option>
            <option>Паспорт</option>
            <option>Свидетельство о рождении</option>
            <option>Вод. удостоверение</option>
          </select>
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.passport.document.$error) }">Обязательное поле</p>
        </label>
        <label class="form__item">
          <p class="form__item-title">Серия:
          </p>
          <input type="number" v-model.number="user.passport.dSeries">
          </label>
        <label class="form__item">
          <p class="form__item-title">Номер:
          </p>
          <input type="number" v-model.number="user.passport.dNumber">
          </label>
        <label class="form__item">
          <p class="form__item-title">Кем выдан:
          </p>
          <input type="text" v-model.trim="user.passport.dFrom">
          </label>
        <label class="form__item">
          <p class="form__item-title">
          <span class="form__item-req">*</span>
          Дата выдачи:
          </p>
          <input type="date" v-model.trim="user.passport.dDate" :class="{'form__item-error': $v.user.passport.dDate.$error }">
          <p class="form__item-msg" :class="{ 'form__item-err': ($v.user.passport.dDate.$error) }">Обязательное поле</p>
          </label>
          <div class="form__item-submit">
            <p class="form__item-title">
            <span class="form__item-req">*</span>
            Поле обязательное для заполнения.
            </p>
            <div class="form__item-submit-btns">
              <button class="form__btn" @click="navTab--">Назад</button>
              <button class="form__btn" @click="onSubmitNext()">Принять</button>
            </div>
          </div>
      </fieldset> 
    </form>
    <div class="form-complite" v-if="submitStatus === true">
      <div class="form-complite__wrp">
        <span class="form-complite__cross" @click="submitStatus = false"></span>
        <p class="form-complite__txt">Клиент успешно создан!</p>
        <button class="form__btn" @click="submitStatus = false">Принять</button>
      </div>
    </div>
  </div>
</template>


<script>
import { required, minLength, numeric, helpers} from 'vuelidate/lib/validators';

const phonReg = helpers.regex('phone', /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$/g);
const alphaReg = (val) => !helpers.req(val) || (/^[а-яА-ЯёЁa-zA-Z]+$/gi).test(val);

export default {
  name: 'App',
  components: {},
  data() {
    return {
      user: {
        info: {
          lastName: '',
          firstName: '',
          middleName: '',
          date: '',
          phone: '',
          sex: '',
          group: [],
          doctor: '',
          sms: false,
        },
        address: {
          index: '',
          country: '',
          region: '',
          city: '',
          street: '',
          house: '',
        },
        passport: {
          document: '',
          dSeries: '',
          dNumber: '',
          dFrom: '',
          dDate: ''
        },
      },
      navTab: 0,
      submitStatus: false,
    }
  },
  validations: {
    user: {
      info: {
        lastName: {
          required,
          minLength: minLength(2),
          alphaReg
        },
        firstName: {
          required,
          minLength: minLength(2),
          alphaReg
        },
        middleName: {
          minLength: minLength(2),
          alphaReg
        },
        date: {
          required
        },
        phone: {
          required,
          phonReg
        },
        group: {
          required
        },
      },
      address: {
        index: {
          numeric,
          minLength: minLength(6)
        },
        country: {
          alphaReg
        },
        city: {
          required
        },
      },
      passport: {
        document: {
          required
        },
        dSeries: {
          numeric,
        },
        dNumber: {
          numeric,
        },
        dDate: {
          required
        }
      },
    }
  },
  methods: {
    openSelect() {
      document.querySelector('.form__item-multi-open').classList.toggle('form__item-multi-open-active');
    },
    onSubmitNext() {
      switch(this.navTab) {
        case 0:
          if (this.$v.user.info.$invalid) {
            this.$v.user.info.$touch();
            window.scrollTo(0, 0);
          } else {
            this.navTab++;
          }
          break;
        case 1:
          if (this.$v.user.address.$invalid) {
            this.$v.user.address.$touch();
            window.scrollTo(0, 0);
          } else {
            this.navTab++;
          }
          break;
        case 2:
          this.$v.user.passport.$touch();
          if (this.$v.$invalid) {
            window.scrollTo(0, 0);
          } else {
            this.submitStatus = true;
            this.resetForm();
            this.$v.$reset();
            this.navTab = 0;
          } 
          break;
         default: 
      }
    },
    resetForm() {
        let self = this; 
        Object.keys(this.user.info).forEach(item => {
          self.user.info[item] = '';
        });
        Object.keys(this.user.address).forEach(item => {
          self.user.address[item] = '';
        });
        Object.keys(this.user.passport).forEach(item => {
          self.user.passport[item] = '';
        });
    },
  },
  
}
</script>
