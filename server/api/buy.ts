import Payjp from 'payjp';

type BuyBody = {
  price: number;
  productId: string;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as BuyBody;

  // なんかしらの購入処理

  // pay.jpの支払い
  try {
    const config = useRuntimeConfig()
    const payjp = Payjp(config.payjpSecretKey);

    const token = await payjp.tokens.create({
      card: {
        number: 4242424242424242,
        cvc: 123,
        exp_month: 2,
        exp_year: 2099
      },
    }, {
      'X-Payjp-Direct-Token-Generate': 'true'
    });

    await payjp.charges.create(
      {
        amount: body.price,
        currency: "jpy",
        card: token.id,
        capture: true,
        tenant: "test",
      }
    );
  } catch (e:any) {
    if (e.response) {
      console.error(e.response.text);
    }
  }
  return { }
})
