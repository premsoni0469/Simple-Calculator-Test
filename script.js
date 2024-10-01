var input_val = document.getElementById('inputVal');
var sub_val = document.getElementById('subVal');
var history_div = document.getElementById('historyDiv');

history_div.innerHTML = `<p id="default_his">There's is no history yet..</p>`;

function getValue(val)
{
    // console.log(val);
    if(input_val.value != '0')
        input_val.value += val;
    else
        input_val.value = val;
}

function solve()
{
    var equation = input_val.value;//6-3
    // console.log(equation);
    sub_val.value = equation + "="; //6-3 = 
    var ans = eval(equation);//3
    input_val.value = ans; // 3

    showHistory(equation, ans);
}

function clearAll()
{
    input_val.value = "0";
    sub_val.value = "";
}

function removeLastDigit()
{
    if(input_val.value.length > 1)
        input_val.value = input_val.value.slice(0,-1);
    else
    {
        input_val.value = input_val.value.slice(0,-1);
        input_val.value = "0";
    }
}

function clearHistory()
{
    var choice = confirm("Are u sure u want to delete history ?");
    if(choice)
        history_div.innerHTML = `<p id="default_his">There's is no history yet..</p>`;
}

function showHistory(equ, ans)
{
    var para = document.querySelector('#historyDiv #default_his');

    if(para != null)
        para.remove();

    history_div.innerHTML += `<div class="his">
                                    <p>${equ} =</p>
                                    <p>${ans}</p>
                                </div>`;
}
