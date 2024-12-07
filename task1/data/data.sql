--
-- PostgreSQL database dump
--

-- Dumped from database version 16.5 (Ubuntu 16.5-1.pgdg22.04+1)
-- Dumped by pg_dump version 16.0

-- Started on 2024-12-07 01:58:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 216 (class 1259 OID 98447)
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    name character varying(32) NOT NULL,
    plu integer NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 98461)
-- Name: ProductBalance; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ProductBalance" (
    "shopId" integer NOT NULL,
    count integer NOT NULL,
    "productPlu" integer NOT NULL,
    "orderCount" integer NOT NULL
);


ALTER TABLE public."ProductBalance" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 98455)
-- Name: Shop; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Shop" (
    id integer NOT NULL
);


ALTER TABLE public."Shop" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 98454)
-- Name: Shop_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Shop_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Shop_id_seq" OWNER TO postgres;

--
-- TOC entry 3351 (class 0 OID 0)
-- Dependencies: 217
-- Name: Shop_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Shop_id_seq" OWNED BY public."Shop".id;


--
-- TOC entry 3190 (class 2604 OID 98458)
-- Name: Shop id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Shop" ALTER COLUMN id SET DEFAULT nextval('public."Shop_id_seq"'::regclass);


--
-- TOC entry 3342 (class 0 OID 98447)
-- Dependencies: 216
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (name, plu) FROM stdin;
\.


--
-- TOC entry 3345 (class 0 OID 98461)
-- Dependencies: 219
-- Data for Name: ProductBalance; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ProductBalance" ("shopId", count, "productPlu", "orderCount") FROM stdin;
\.


--
-- TOC entry 3344 (class 0 OID 98455)
-- Dependencies: 218
-- Data for Name: Shop; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Shop" (id) FROM stdin;
1
2
3
\.


--
-- TOC entry 3352 (class 0 OID 0)
-- Dependencies: 217
-- Name: Shop_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Shop_id_seq"', 3, true);


--
-- TOC entry 3196 (class 2606 OID 98509)
-- Name: ProductBalance ProductBalance_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductBalance"
    ADD CONSTRAINT "ProductBalance_pkey" PRIMARY KEY ("productPlu", "shopId");


--
-- TOC entry 3192 (class 2606 OID 98503)
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (plu);


--
-- TOC entry 3194 (class 2606 OID 98460)
-- Name: Shop Shop_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Shop"
    ADD CONSTRAINT "Shop_pkey" PRIMARY KEY (id);


--
-- TOC entry 3197 (class 2606 OID 98510)
-- Name: ProductBalance ProductBalance_productPlu_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductBalance"
    ADD CONSTRAINT "ProductBalance_productPlu_fkey" FOREIGN KEY ("productPlu") REFERENCES public."Product"(plu) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- TOC entry 3198 (class 2606 OID 98468)
-- Name: ProductBalance ProductBalance_shopId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ProductBalance"
    ADD CONSTRAINT "ProductBalance_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES public."Shop"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


-- Completed on 2024-12-07 01:58:41

--
-- PostgreSQL database dump complete
--

