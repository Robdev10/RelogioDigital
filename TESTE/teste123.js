const cincomil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise cincomil resolvida"), 5000);});
    
    const mil = () => new Promise((resolve, reject) => {
    setTimeout(() => reject("promise mil Rejeitada"), 1000); });
    
    const resolvedoradepromiseassinconas = async () => {
    const resultado1 = await cincomil().then((res) => {
    console.log(res);
    }).catch((err) =>{
    console.log(err);});
    console.log('codigo aqui');
    const resultado2 = await mil().then((res) =>{
    console.log(res);
    }).catch((err) =>{
    console.log(err);});
    
    console.log(`Mensagens: ${resultado1} ${resultado2}`) }
    
    resolvedoradepromiseassinconas()
