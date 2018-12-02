export default function Header(state){
    return `
<div id="Summer">
        <h1> ${state[state.active].title}</h1>
        <img src="https://biz.prlog.org/PhoneDoctor/logo.png" alt="phone doctor logo">
        <p>Phone Dr. has been working hard to save the lives of patients who seeks medical attention. Phone
            Doctor has years of experience operating on all types of phones. Phone Dr. travels globally to provide
            Emergency
            repair services. Is your phone sick?
        </p>
    </div>




`;
}