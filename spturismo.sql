-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-08-2023 a las 01:56:24
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `spturismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(550) NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(1, 'cb500f', 'la nueva honda', 'cuerpo 1 La fundación de San Pedro se remonta a 1748. Sin embargo, ya en 1637, un documento firmado por Pedro Esteban Dávila, (Caballero de la Orden de Santiago, Gobernador y Capitán General), marca el origen del nombre de Rincón de San Pedro en el pago del río Arrecifes. A estas tierras se las denominaron Rincón de San Pedro Dávila de los Arrecifes.\r\n\r\nEl pueblo comenzó a tomar forma cuando en 1750 se inicia la construcción del Antiguo Convento Recoleto de Franciscanos (por decisión del presbítero Antonio Goicochea), alrededor del cual se comienzan a agrupar los pobladores.\r\n\r\nEn Buenos Aires, Juan Facundo Quiroga se dedicó a la administración de la estancia que compró en San Pedro. En esa zona viven sus descendientes, varios heredaron su nombre completo de Facundo Quiroga. Durante su estadía fue el único que se atrevió a visitar al expresidente Bernardino Rivadavia en el buque en que llegaba de vuelta, al que no se permitió desembarcar y se envió de regreso al exilio.\r\n\r\nLa declaración de San Pedro como ciudad data del 25 de julio de 1907.', 'bqb65fkorqo5zv2msleo'),
(5, '23r34r4', '432r34t3', 'wrtyfuygimyjnhtbgrtfegthjtkmyjhgfd', 'tyxcczyxcxs9nlmakskr');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'nicolas', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'francisco', '81dc9bdb52d04dc20036dbd8313ed055'),
(3, 'admin', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
