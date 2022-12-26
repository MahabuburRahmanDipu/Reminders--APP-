// search bar style change
const header = document.querySelector('#header');
const cancel = document.querySelector('.cancel-btn');
const searchbar = document.querySelector('#search-bar');
const searchbaractive = document.querySelector('.search-bar-active');
const searchbarinput = document.querySelector('#search');

// search bar active style function
function open () {
    header.style = 'display: none';
    cancel.style = 'display: block';
    searchbar.style = 'padding-top: 0.4rem;';
    searchbaractive.style = 'padding-top: 0.2rem;';
    searchbarinput.style = 'width: 84%; padding-top: 0.4rem;';
}
searchbarinput.addEventListener('click', open);

// search bar close style function
cancel.addEventListener('click', close = () => {
    header.style = 'default';
    cancel.style = 'default';
    searchbar.style = 'default';
    searchbaractive.style = 'default';
    searchbarinput.style = 'default';
});
// ===================================================================


// main list page open
const todayBox = document.querySelector('.today');
const scheduledBox = document.querySelector('.Scheduled');
const allBox = document.querySelector('.all');
const flaggedBox = document.querySelector('.flagged');
const Todaypage = document.querySelector('#today-page');
const Scheduledpage = document.querySelector('#scheduled-page');
const Allpage = document.querySelector('#all-page');
const Flaggedpage = document.querySelector('#flagged-page');

todayBox.addEventListener('click', () => {
    Todaypage.style = 'transform: translateX(0%);';
})

scheduledBox.addEventListener('click', () => {
    Scheduledpage.style = 'transform: translateX(0%);';
})

allBox.addEventListener('click', () => {
    Allpage.style = 'transform: translateX(0%);';
})

flaggedBox.addEventListener('click', () => {
    Flaggedpage.style = 'transform: translateX(0%);';
})

// main list page close
const tpheader = document.querySelector('.tpheader');
const spheader = document.querySelector('.spheader');
const apheader = document.querySelector('.apheader');
const fpheader = document.querySelector('.fpheader');

tpheader.addEventListener('click', () => {
    Todaypage.style = 'default';
})

spheader.addEventListener('click', () => {
    Scheduledpage.style = 'default';
})

apheader.addEventListener('click', () => {
    Allpage.style = 'default';
})

fpheader.addEventListener('click', () => {
    Flaggedpage.style = 'default';
})
// ===================================================================


// all-lists > reminders-page open and close
const reminderspage = document.querySelector('.reminder-page-wrapper');
const reminders = document.querySelector('.reminders');
const reminderpheader = document.querySelector('.reminder-p-header');

reminders.addEventListener('click', () => {
    reminderspage.style = 'transform: translateX(0%);';
})

reminderpheader.addEventListener('click', () => {
    reminderspage.style = 'default';
})
// ===================================================================

// ADD NEW REMINDERS page open and close
const pagefooter = document.querySelectorAll('.page-footer-addreminder');
const AddNewReminders = document.querySelector('#AddNewReminders');
const NRcancelbtn = document.querySelector('.NRcancel-btn');

// open add new reminder page from any addreminder btn
pagefooter.forEach( btn => {
    btn.onclick = () => {
        AddNewReminders.style= 'transform: translateY(0%);' 
    }
});

// add new reminders page close and empty typified
NRcancelbtn.addEventListener('click', () =>{
    AddNewReminders.style = 'default; transition: 0.3s;';
    ReminderTitle.value = '';
    ReminderNotes.value = '';
    addnewreminderbtn.style = 'default';
})

// -------------ADD NEW REMINDERS-------------
const addnewreminderbtn = document.querySelector('.addnewreminder-btn');
const ReminderTitle = document.querySelector('#ReminderTitle');
const ReminderNotes = document.querySelector('#ReminderNotes');

// active the addnewreminder (Add) BTN 
ReminderTitle.onkeyup = function activenewrmbtn () {
    if (ReminderTitle.value.length > 0){
        addnewreminderbtn.style = 'color: var(--blue);';
    } else {
        addnewreminderbtn.style = 'default';
    }
}

const allnewreminders = document.querySelector('.all-new-reminders');
// function for creating new reminder
function CreatNewReminder () {
    // newreminders wrapper div
    const newreminders = document.createElement("div");
    newreminders.className = 'newreminders';
    //-------------------------------------------------------------

    // input wrapper div
    const inputwrapper = document.createElement("div");
    inputwrapper.className = 'inputwrapper';

    // new reminder checkmark-INPUT
    const checkboxinput = document.createElement('input');
    checkboxinput.setAttribute("type", "checkbox", "name", "checkbox");
    checkboxinput.id = 'checkbox';

    // append the input inside the inputwrapper div
    inputwrapper.append(checkboxinput);
    //-------------------------------------------------------------

    // ul wrapper div
    const Ulwrapper = document.createElement("div");
    Ulwrapper.className = 'ulwrapper';

    // ul for li
    const ul = document.createElement("ul");
    ul.className = 'liwrapper';

    // append the ul inside the  ulwrapper div
    Ulwrapper.append(ul);
    //-------------------------------------------------------------

    // li for  new reminder Title
    const TitleLI = document.createElement("li");
    TitleLI.className = 'TitleLI';

    // set the title li  innerHTML
    TitleLI.innerHTML = ReminderTitle.value;

    // li for  new reminder note
    const NotesLI = document.createElement("li");
    NotesLI.className = 'NotesLI';

    // set the note li  innerHTML
    NotesLI.innerHTML = ReminderNotes.value;

    // appen 2 li inside the ul
    ul.append(TitleLI, NotesLI);
    //-------------------------------------------------------------

    // appned inputwrapper and ulwrapper inside the newreminders div
    newreminders.append(inputwrapper, Ulwrapper);
 
    allnewreminders.append(newreminders);
}
addnewreminderbtn.addEventListener('click', CreatNewReminder);

// function for NEW REMINDER add btn
function addingnewreminder () {
    AddNewReminders.style = 'default; transition: 0.3s;';
    ReminderTitle.value = '';
    ReminderNotes.value = '';
    addnewreminderbtn.style = 'default';
}
addnewreminderbtn.addEventListener('click', addingnewreminder);

// all-box number increase when new reminder added
const anum = document.querySelector('.a-num');
let apnum = 0;
function addnum () {
    apnum++
    anum.innerHTML = apnum;
}
addnewreminderbtn.addEventListener('click', addnum);

// --------ADD NEW REMINDERS - Details PAGE--------
const DetailsPage = document.querySelector('#Details-Page');
const detailsbox = document.querySelector('.details-box');
const DetailspHeader = document.querySelector('.Details-pHeader');

detailsbox.addEventListener('click', () => {
    DetailsPage.style = 'transform: translateX(0%);';
})

DetailspHeader.addEventListener('click', () => {
    DetailsPage.style = 'default';
})

// --------ADD NEW REMINDERS - LIST PAGE--------
const listbox = document.querySelector('.list-box');
const ListPage = document.querySelector('#List-Page');
const ListpHeader = document.querySelector('.List-pHeader');
const AllListsfrommylists = document.querySelector('.All-Lists-from-my-lists');

listbox.addEventListener('click', () => {
    ListPage.style = 'transform: translateX(0%);';
})

ListpHeader.addEventListener('click', () => {
    ListPage.style = 'default';
})
// ===================================================================

// ADD NEW LIST page open and close
const AddNewList = document.querySelector('#AddNewList');
const addlist = document.querySelector('.add-list');
const NLcancelbtn = document.querySelector('.NLcancel-btn');
const NListName = document.querySelector('#NList-Name');
const AddNewListBtn = document.querySelector('.AddNewListBtn');
const EmptyListInput = document.querySelector('.EmptyListInput');
const NLname = document.querySelector('.NL-name');


// add new list page open
addlist.addEventListener('click',  () => {
    AddNewList.style = 'transform: translateY(0%);';
})

// New list cancel btn function-- LIST page close and empty typified
function ResetNewlist () {
    AddNewList.style = 'default; transition: 0.3s;';
    NListName.value = '';
    NLselectedCi.style.background = 'var(--blue)';
    NLselectedCi.innerHTML = '<iconify-icon icon="material-symbols:format-list-bulleted-rounded"></iconify-icon>';
    AddNewListBtn.style = 'default';
    EmptyListInput.style = 'default';
}
NLcancelbtn.addEventListener('click', ResetNewlist);

// -------------ADD NEW LISTS-------------
// active the addnewlist BTN 
NListName.onkeyup = function input () {
    // if statement to activate done button
    if (NListName.value.length > 0){
        AddNewListBtn.style = 'color: var(--blue);';
        EmptyListInput.style = 'right: 2.5rem; margin-top: -4.95rem; display: block;';
    } else {
        AddNewListBtn.style = 'default';
        EmptyListInput.style = 'default';
    }

    // clear the input field and deactivate done button
    EmptyListInput.addEventListener('click', () => {
        NListName.value = '';
        EmptyListInput.addEventListener('click', input);
    });
}

// new list color select
const colors = document.querySelectorAll('.colors');
const NLselectedCi = document.querySelector('.NL-selected-C-i');

colors.forEach((colors) => {
    colors.onclick = () => {
        NLselectedCi.style.background = colors.dataset.color;
    }
});

const alllists = document.querySelector('#all-lists');
// function for creat new list
function createnewlist () {
    // new reminder list wrapper div
    const Newlistdiv = document.createElement("div");
    Newlistdiv.className = 'Newreminder';
    //--------------------------------------------------------------

    // 1div new reminder list icon and bg color div
    const Newiconandbgcr = document.createElement("div");
    Newiconandbgcr.className = 'selectedicon';

    // set the icon background to the color that user selected
    Newiconandbgcr.style.background = NLselectedCi.style.background;

    // set the icon that user selected from the icon list
    Newiconandbgcr.innerHTML = NLselectedCi.innerHTML;
    //--------------------------------------------------------------
    
    // 2div new reminder list name div
    const Newlistname = document.createElement("div");
    Newlistname.className = 'Newlistname';

    const listh3 = document.createElement("h3");
    
    // append the new list name that user typed
    listh3.append(NListName.value);

    // append the h3 inside the newlistname div
    Newlistname.append(listh3);
    //--------------------------------------------------------------
    
    // 3div new reminder list num div
    const Newlistnum = document.createElement("div");
    Newlistnum.className = 'Newlistnum';

    // append the num in num div
    Newlistnum.innerHTML = '0';
    //--------------------------------------------------------------
    
    // 4div new reminder list arrow icon div
    const Newlistarrowic = document.createElement("div");
    Newlistarrowic.className = 'Newlistarrowic';

    // append the arrow icon in the arrow div
    Newlistarrowic.innerHTML = '<iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon>';
    //--------------------------------------------------------------

    // append 4 div in 1st div
    Newlistdiv.append(Newiconandbgcr, Newlistname, Newlistnum, Newlistarrowic);

    // append Newlist in allList
    alllists.append(Newlistdiv);

}
// create new list
AddNewListBtn.addEventListener('click', createnewlist);

// function for append new list inside New reminder list page 
AddNewListBtn.addEventListener('click', () => {
    // new listfromlistsdiv list wrapper div
    const listfromlistsdiv = document.createElement("div");
    listfromlistsdiv.className = 'newlistfromlistsdiv';
    
    // 1div new list icon and bg color div
    const firstreminder = document.createElement("div");
    firstreminder.className = 'newfirstreminder';

    // set the icon background to the color that user selected
    firstreminder.style.background = NLselectedCi.style.background;

    // set the icon that user selected from the icon list
    firstreminder.innerHTML = NLselectedCi.innerHTML;
    // -------------------------------------------------

    // 2div new reminder list name div
    const firstremindertext = document.createElement("div");
    firstremindertext.className = 'newfirstreminder-text';

    const listh4 = document.createElement("h4");
    
    // append the new list name that user typed
    listh4.append(NListName.value);

    // append the h3 inside the newlistname div
    firstremindertext.append(listh4);
    // -------------------------------------------------

    // 3div new reminder list arrow icon div
    const underlineforlist = document.createElement("div");
    underlineforlist.className = 'newunderlineforlist';
    // -------------------------------------------------

    // append 3 div in 1st div
    listfromlistsdiv.append(firstreminder, firstremindertext, underlineforlist);

    AllListsfrommylists.append(listfromlistsdiv);

});

// LIST page close and empty typified
AddNewListBtn.addEventListener('click', ResetNewlist);
// ===================================================================

