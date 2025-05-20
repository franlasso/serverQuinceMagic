import decoracionModel from "../models/decoracion.model.js";
import menuModel from "../models/menu.model.js";
import salonModel from "../models/salon.model.js";

const calculo = async (req,res)=>{

    try {
        const datos = req.body
        console.log(datos.tematica)
        const decoracion = await decoracionModel.find({"decoracionTematica":datos.tematica});
        let valorMinimo = Infinity;
        let valorMaximo = 0;

        for (const deco of decoracion) {
        if (deco.valorDecoracionMin < valorMinimo) {
            valorMinimo = deco.valorDecoracionMin;
        }
        if (deco.valorDecoracionMax > valorMaximo) {
            valorMaximo = deco.valorDecoracionMin;
        }
        }
        console.log("Valor mínimo de decoración:", valorMinimo);
        console.log("Valor máximo de decoración:", valorMaximo);

        const menu = await menuModel.find({"menuTematica":datos.tematica});
        let valorMenuMin = Infinity;
        let valorMenuMax = -Infinity;

        for (const item of menu) {
        if (item.valorPersonaMenu < valorMenuMin) {
            valorMenuMin = item.valorPersonaMenu;
        }
        if (item.valorPersonaMenu > valorMenuMax) {
            valorMenuMax = item.valorPersonaMenu;
        }
        }
        const invitados = Number(datos.invitados);
        const valorMenuTotalMin = valorMenuMin * invitados;
        const valorMenuTotalMax = valorMenuMax * invitados;

        console.log("Costo mínimo:", valorMenuTotalMin);
        console.log("Costo máximo:", valorMenuTotalMax);

        const salon = await salonModel.find({"capacidadSalon":{$gte: datos.invitados }}).sort({"capacidadSalon":1}).limit(1);
        console.log(salon)

        const combinaciones = [
        valorMenuTotalMin + valorMinimo,
        valorMenuTotalMin + valorMaximo,
        valorMenuTotalMax + valorMaximo,
        valorMenuTotalMax + valorMinimo,
        ];
        let bestIndex;
        const dentroPresupuesto = combinaciones.filter((total, i) => {
            bestIndex = i
            return total <= datos.presupuesto
        });
        let mejorOpcion = null;
        if (dentroPresupuesto.length > 0) {
        mejorOpcion = Math.max(...dentroPresupuesto);
        } else {
        mejorOpcion = "No hay opciones dentro del presupuesto";
        }
        console.log("Mejor opción dentro del presupuesto:", mejorOpcion);
        let bestOption = {decorations: 0, menu: 0}
        function bestOptions(i) {
            switch(i){
                case 0:
                    return bestOption = {decorations: valorMinimo, menu: valorMenuTotalMin};
                    break;
                case 1:
                    return bestOption = {decorations: valorMaximo, menu: valorMenuTotalMin};
                    break;
                case 2:
                    return bestOption = {decorations: valorMaximo, menu: valorMenuTotalMax};
                    break;
                case 3:
                    return bestOption = {decorations: valorMinimo, menu: valorMenuTotalMax}
            }
        };
        bestOptions(bestIndex);
        console.log (`best index is ${bestIndex} and best option is ${bestOption.decorations} and ${bestOption.menu}`)

        const randomNumber = Math.floor(Math.random()*2)
        const suggestedInfo = {decoSug: decoracion[randomNumber].decoracionSugerida, menuSug: menu[randomNumber].menuSugerido}

        return res.status(200).json({
        decoracion,
        menu,
        valorDecoracionMin: valorMinimo,
        valorDecoracionMax: valorMaximo,
        valorMenuTotalMin,
        valorMenuTotalMax,
        mejorOpcion,
        bestOption,suggestedInfo
        });
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
export default calculo