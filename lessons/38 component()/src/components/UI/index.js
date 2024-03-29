// 1) Array icine EXPORT etmek istediyimiz UI elementlerini elave edirik. Hal-hazirda cemi bir dene UI elementi movcuddur: MyButton

// 2) Sonra 'MyButton' faylina gederek EXPORT obyektinin icinde 1 eded 'NAME' adinda xasse yaradiriq ve ona deyer olaraq 'my-button' veririk.
// Hemin 'my-button' deyeri komponentimizin nece adlanacagini demek ucundur.

// 3) Mentiqnen oz Kitabxanamizi yaratmis olduq. Bes bu kitabxanadan nece istifade ede bilerik?  Bunun ucun MAIN.JS faylini aciriq. 
// Sonra Array icinde olan UI komponentlerini import edirik:  
import MyButton from "@/components/UI/MyButton.vue"; 

export default [
    MyButton
]