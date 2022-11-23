import { Colors } from '../../untils/Colors'
import { NavItemsListe } from '../../untils/Listes'

export const Buttons = {
  navButton: (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-list"></i>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end "
        id="navbarNav"
      >
        {NavItemsListe}
      </div>
    </>
  ),
}

export const BtnJenProfit = (
  <div className="" style={{ fontFamily: 'Century Gothic' }}>
    <div className=" justify-content-center d-flex">
      <a
        href="mailto:monferrersilvestrevincente@gmail.com?subject=Prise%20d'information%20sur%20vos%20offres&cc=monferrersilvestrevincente@gmail.com&body=Bonjour%20.%20J'aimerais%20faire%20une%20demande%20de%20prêt.J'aimerais%20faire%20une%20demande%20de%20..."
        className="text-center btn fs-4 px-5 pb-2 d-md-block d-none"
        style={{ backgroundColor: Colors.jenprofite }}
      >
        Faire ma demande
      </a>
    </div>

    <div
      className=" justify-content-center  d-block d-md-none d-flex fixed-bottom"
      style={{ backgroundColor: Colors.jenprofite, fontSize: '1.5em' }}
    >
      <a
        href="mailto:monferrersilvestrevincente@gmail.com?subject=Prise%20d'information%20sur%20vos%20offres&cc=monferrersilvestrevincente@gmail.com&body=Bonjour%20.%20J'aimerais%20faire%20une%20demande%20de%20prêt.J'aimerais%20faire%20une%20demande%20de%20..."
        className="text-center btn fs-2   animate__shakeX animate__animated py-2"
      >
        Faire ma demande
      </a>
    </div>
  </div>
)
