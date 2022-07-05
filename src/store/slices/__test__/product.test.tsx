import {clearProducts, setProductsData} from '../products'
import { expect } from '@jest/globals'
import { ItemDTO } from '../../../dtos/ItemDTO';
import ConfigStore from "../../configureStore";

describe('Product Slice testing', ()=>{
    let store = ConfigStore().store;
    
    it('testing checking products state in store', ()=>{
        
        let itemName = 'Item 1';
        let item : ItemDTO = {
          id : "1",
          name : itemName
        
        }
        store.dispatch(setProductsData([item]))
        let items = store.getState().products.items
        expect(items[0].name).toBe(itemName)
        

        store.dispatch(clearProducts({}))
        let _items = store.getState().products.items
        expect(_items.length).toBe(0)
    })


})