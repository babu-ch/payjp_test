import Payjp from 'payjp';

type BuyBody = {
  price: number;
  productId: string;
  token:string;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as BuyBody;

  // なんかしらの購入処理

  // pay.jpの支払い
  try {
    const config = useRuntimeConfig()
    const payjp = Payjp(config.payjpSecretKey);

    await payjp.charges.create(
      {
        amount: body.price,
        currency: "jpy",
        card: body.token,
        capture: true,
        tenant: "test",
      }
    );
  } catch (e:any) {
    if (e.response) {
      console.error(e.response.text);
    }
    return { success: false }
  }
  return { success: true }
})
