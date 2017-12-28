<template>
    <!--
    1.form表单内容可以利用v-model进行数据绑定的操作；
    2.可以对成组的数据内容利用groupData.field的方式进行数据绑定；
    3.v-model还有几个修饰符，比如lazy、number、trim等，v-model.lazy，在默认情况下， v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步
    4.textarea的数据绑定方式还是v-model，不需要将内容写在<textarea>{{data}}</textarea>中间，仍旧写成<textarea v-model="data"></textarea>不然的话将无法显示；
    5.对于textarea的换行显示问题，需要在显示textarea内容的地方加上样式内容，即style="white-space: pre"就可以，这样的话就可以换行内容的显示了；
    6.checkboxes定义为array形式，然后利用v-for形式将数据进行循环显示出来；
    7.radiobox只需要将成组的radio的v-model设置成相同的变量即可，然后对应相应的value值；
    8.select的options可以定义成array，这样在select中option就可以利用v-for进行循环输出了，当然还可以利用:value来绑定其option的值的内容；
    9.利用:value和@input两者的结合操作可以实现v-model数据绑定相同的结果，参见email的操作模式；
    10.封装自定义的表单组件，比如Switch，可以绑定数据，在组件中利用属性参数传递的方式进行切换改值的操作；
    11.@click.prevent可以实现默认事件的阻止

    -->
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                :value="userData.email"
                                @input="userData.email = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model.lazy="userData.password">
                        <p>{{ userData.password }}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
                                class="form-control"
                                v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
                            class="form-control"
                            v-model="message"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
                                    value="SendMail"
                                    v-model="sendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
                                    value="SendInfoMail"
                                    v-model="sendMail"> Send Infomail
                        </label><!-- Also show for single checkbox with true/ false -->
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
                                value="Male"
                                v-model="gender"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
                                value="Female"
                                v-model="gender"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <!-- 
                        将判断写在option中，并且判断是通过text来进行操作的，
                        当然也可以换成value值来判断 -->
                    <!-- 
                        <select
                            id="priority"
                            class="form-control">
                        <option
                                v-for="priority in priorities"
                                :selected="priority.text == 'Medium'"
                                >{{ priority.text }}</option>
                    </select> 
                    -->

                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option
                                v-for="priority in priorities"
                                :value="priority.value"
                                >{{ priority.text }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Age: {{ userData.age }}</p>
                        <p style="white-space: pre">Message: {{ message }}</p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="item in sendMail">{{ item }}</li>
                        </ul>
                        <p>Gender:  {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }}</p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue';

    export default {
        data () {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 27
                },
                message: 'A new Text',
                sendMail: [],
                gender: 'Female',
                selectedPriority: 'M',
                priorities: [
                    {text:'High',value:'H'}, {text:'Medium',value:'M'}, {text:'Low',value:'L'}
                    ],
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
          submitted() {
              this.isSubmitted = true;
          }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>

<style>
</style>
