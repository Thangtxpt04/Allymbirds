function Validator(formSelector){
    function getParent(element, selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            else element = element.parentElement;
        }
    }
    var formRules = {};
    var validatorRules = {
        required : function(value){
            return value ? undefined : "Bắt buộc nhập"
        },
        min: function(min){
            return function(value){
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        },
        password : function(value){
            return value === document.querySelector('#form-regester #password').value ? undefined : "Mật khẩu nhập lại không chính xác";
        }
    }
    // Lấy ra form element trong DOM
    var formElement = document.querySelector(formSelector);
    if(formElement){
        var inputs = formElement.querySelectorAll('[rules]')
        Array.from(inputs).forEach(input => {
            var rules = input.getAttribute('rules').split('|');
            var ruleInfor;

            for(var rule of rules){
                var isRuleHasValue = rule.includes(':');
                if(isRuleHasValue){
                    ruleInfor = rule.split(':');
                    rule = ruleInfor[0];
                }

                var rulefunc = validatorRules[rule];
                if(isRuleHasValue){
                    rulefunc = rulefunc(ruleInfor[1]);
                }
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(rulefunc);
                }
                else
                {
                    formRules[input.name] = [rulefunc]
                }
            }

            input.onblur = handleValidate;
            input.oninput = handleClear;
        });
    }

    function handleValidate(event){
        var rules = formRules[event.target.name];
        var errorMessage;
        rules.some(function(rule){
            errorMessage = rule(event.target.value);
            return errorMessage;
        })
        if(errorMessage){
            var formGroup = getParent(event.target, '.auth-form__group');
            if(formGroup){
                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage){
                    formMessage.innerText = errorMessage;
                    formGroup.classList.add('invalid');
                }
                else{
                    formMessage.innerText = '';
                    formGroup.classList.remove('invalid');
                }

            }
        }

        return !errorMessage;

    }

    function handleClear(event){
        var formGroup = getParent(event.target, '.auth-form__group');
        if(formGroup.classList.contains('invalid')){
            var formMessage = formGroup.querySelector('.form-message');
            formMessage.innerText = '';
            formGroup.classList.remove('invalid');
        }
    }

    // Khi submitform
    var loginBtn = formElement.querySelector('.auth-form__btn-login');
    loginBtn.onclick = function (event){
        event.preventDefault();

        var isValid = true;
        var inputs = formElement.querySelectorAll('[rules]');

        for(var input of inputs){
            if(!handleValidate({target:input})){
                isValid = false;
            }
        }

        if(isValid){
            formElement.submit();
        }
    }
}