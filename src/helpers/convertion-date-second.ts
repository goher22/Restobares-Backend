export const convertionDateSecond = (date:string, time:string="T00:00:00.000Z"): number => {

    const [dia, mes, anio] = date.split('-');        
    const fecha = new Date(`${anio}-${mes}-${dia}${time}`);
    const initSecund = fecha.getTime();

    return initSecund;

}