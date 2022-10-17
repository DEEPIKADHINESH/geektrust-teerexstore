export const filterService=[
    {gender:"Men"},
    {gender:"Women"},
    
]
export function getFilteredService(){
    return filterService.filter(g=>g)
}