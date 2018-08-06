function getIncome()
{
    //Assume form with id="theform"
    var theForm = document.forms["tuitionform"];
    //Get a reference to the TextBox
    var family_income = theForm.elements["income"];
    var howmany =0;
    //If the textbox is not blank
    if(family_income.value!="")
    {
        howmany = parseInt(family_income.value);
    }
return howmany;
}

function getSavings()
{
    var theForm = document.forms["tuitionform"];
    var savings = theForm.elements["savings"];
    var howmany = 0;

    if(savings.value!="")
    {
        howmany = parseInt(savings.value);
    }
return howmany
}

function getRent()
{
    var theForm = document.forms["tuitionform"];
    var rent = theForm.elements["rent"];
    var howmany = 0;

    if(rent.value !="")
        {
            howmany = parseInt(rent.value);
        }
    return howmany
}

function getBK_Ind_Kids()
{
    var theForm = document.forms["tuitionform"];
    var bk_kids = theForm.elements["children_at_bk_ind"];
    var howmany = 0;

    if (bk_kids.value != "")
    {
        howmany = parseInt(bk_kids.value);
    }
    return howmany
}

function getTotalKids()
{
    var theForm = document.forms["tuitionform"];
    var tot_kids = theForm.elements["children"];
    var howmany = 0;

    if (tot_kids.value !="")
    {
        howmany = parseInt(tot_kids.value);
    }

    return howmany

}


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getTotal()
{
    var total_avail = numberWithCommas(Math.round((getIncome() + getSavings()*.1 -
                          getRent()*12) / (getBK_Ind_Kids()
                          + .2*getTotalKids())));

    if (total_avail > 90000)
    {
        var tuition = numberWithCommas(42500)
    }

    else if (total_avail > 80000)
    {

        var tuition = numberWithCommas(30000)
    }

    else if (total_avail > 60000)
    {
        var tuition = numberWithCommas(10000)
    }

    else
    {
        var tuition = numberWithCommas(500)
    }

 
    //display the result
    document.getElementById('totalTuition').innerHTML =
                                      "Total Tuition for one year $"+tuition;
 
}





