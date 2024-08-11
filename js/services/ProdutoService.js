import Cookies from "../storage/cookies.js"
import { conectaAPIProduto } from "../api/produtoEndpoint.js";

class ProdutoService {

    static async criarProduto(evento, form){
        evento.preventDefault();

        let category;
        const categories = form.category;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].checked) {
                category = categories[i].value;
                break;
            }
        }
        const amount = Number.parseInt(form.amount.value);
        const status = form.status.value;
        const name = form.name.value;
        const file = form.file.files[0];
        const alt = form.alt.value;
        const description = form.description.value;
        const price = Number.parseFloat(form.price.value);

    try{
       const accessToken = await Cookies.pegaCookie("accessToken");
       const res = await conectaAPIProduto.createProduto(category, amount, status, name, file, alt, description, price, accessToken);
        alert(res.message);
    } catch(e){
        alert(e);
    }
    }

    static async listarProduto(pagination){
        try{
            const res = await conectaAPIProduto.listProdutos(pagination);
            
            if(res.length === 0){
                return {message: `Não há produtos cadastrados`}
            }
            return res;
        }catch(e){
            console.log(e);
        }

    }
}


export default ProdutoService;