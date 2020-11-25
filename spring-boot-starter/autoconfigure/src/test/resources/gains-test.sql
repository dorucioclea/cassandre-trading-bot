-- =====================================================================================================================
-- Insert orders.
INSERT INTO ORDERS (ID, TYPE, ORIGINAL_AMOUNT, CURRENCY_PAIR, USER_REFERENCE, TIMESTAMP, STATUS, CUMULATIVE_AMOUNT,
                    AVERAGE_PRICE, FEE, LEVERAGE, LIMIT_PRICE)
values  -- For position 1.
        ('OPEN_ORDER_01', 'BID', 10, 'BTC/USDT', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        ('CLOSE_ORDER_01', 'ASK', 10, 'BTC/USDT', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        -- For position 2.
        ('OPEN_ORDER_02', 'BID', 20, 'ETH/BTC', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        ('CLOSE_ORDER_02', 'ASK', 20, 'ETH/BTC', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        -- For position 3.
        ('OPEN_ORDER_03', 'BID', 30, 'BTC/USDT', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        ('CLOSE_ORDER_03', 'ASK', 30, 'BTC/USDT', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        -- For position 4.
        ('OPEN_ORDER_04', 'BID', 50, 'BTC/USDT', '', '2020-11-20', 'NEW', 10, 1, 1, '', 1),
        ('CLOSE_ORDER_04', 'ASK', 50, 'BTC/USDT', '', '2020-11-20', 'NEW', 10, 1, 1, '', 1),
        -- For position 5.
        ('OPEN_ORDER_05', 'BID', 50, 'BTC/USDT', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        ('CLOSE_ORDER_05', 'ASK', 50, 'BTC/USDT', '', '2020-11-20', 'NEW', 10, 1, 1, '', 1),
        -- For position 6.
        ('OPEN_ORDER_06', 'BID', 50, 'BTC/USDT', '', '2020-11-20', 'FILLED', 10, 1, 1, '', 1),
        ('CLOSE_ORDER_06', 'ASK', 50, 'BTC/USDT', '', '2020-11-20', 'NEW', 10, 1, 1, '', 1);

       -- =====================================================================================================================
-- Insert positions.
INSERT INTO POSITIONS (ID, STATUS, CURRENCY_PAIR, AMOUNT, RULES_STOP_GAIN_PERCENTAGE, RULES_STOP_LOSS_PERCENTAGE,
                       OPENING_ORDER_ID, CLOSING_ORDER_ID, LOWEST_PRICE, HIGHEST_PRICE, LATEST_PRICE)
VALUES  (1, 'CLOSED', 'BTC/USDT', 10, null, null, 'OPEN_ORDER_01', 'CLOSE_ORDER_01', null, null, null),
        (2, 'CLOSED', 'ETH/BTC', 20, null, null, 'OPEN_ORDER_02', 'CLOSE_ORDER_02', null, null, null),
        (3, 'CLOSED', 'BTC/USDT', 30, null, null, 'OPEN_ORDER_03', 'CLOSE_ORDER_03', null, null, null),
        (4, 'OPENING', 'BTC/USDT', 50, null, null, 'OPEN_ORDER_04', 'CLOSE_ORDER_04', null, null, null),
        (5, 'OPENED', 'BTC/USDT', 50, null, null, 'OPEN_ORDER_05', 'CLOSE_ORDER_05', null, null, null),
        (6, 'CLOSING', 'BTC/USDT', 50, null, null, 'OPEN_ORDER_06', 'CLOSE_ORDER_06', null, null, null);

-- =====================================================================================================================
-- Insert trades.
INSERT INTO TRADES (ID, ORDER_ID, TYPE, ORIGINAL_AMOUNT, CURRENCY_PAIR, PRICE, TIMESTAMP, FEE_AMOUNT, FEE_CURRENCY,
                    POSITION_ID)
values  -- For position 1.
        ('TRADE_11', 'OPEN_ORDER_01', 'BID', 7, 'BTC/USDT', 11, DATE '2020-08-05', 1, 'USD', 1),
        ('TRADE_12', 'OPEN_ORDER_01', 'BID', 3, 'BTC/USDT', 12, DATE '2020-08-06', 2, 'USD', 1),
        ('TRADE_13', 'CLOSE_ORDER_01', 'ASK', 1, 'BTC/USDT', 13, DATE '2020-08-07', 3, 'USD', 1),
        ('TRADE_14', 'CLOSE_ORDER_01', 'ASK', 2, 'BTC/USDT', 14, DATE '2020-08-08', 4, 'USD', 1),
        ('TRADE_15', 'CLOSE_ORDER_01', 'ASK', 8, 'BTC/USDT', 15, DATE '2020-08-09', 5, 'USD', 1),
        -- For position 2.
        ('TRADE_21', 'OPEN_ORDER_02', 'BID', 20, 'ETH/BTC', 100, DATE '2020-08-05', 5, 'USD', 2),
        ('TRADE_22', 'CLOSE_ORDER_02', 'ASK', 20, 'ETH/BTC', 50, DATE '2020-08-06', 5, 'USD', 2),
        -- For position 3.
        ('TRADE_31', 'OPEN_ORDER_03', 'BID', 30, 'BTC/USDT', 20, DATE '2020-08-05', 6, 'USD', 3),
        ('TRADE_32', 'CLOSE_ORDER_03', 'ASK', 30, 'BTC/USDT', 25, DATE '2020-08-06', 5, 'USD', 3),
        -- For position 4.
        ('TRADE_41', 'OPEN_ORDER_04', 'BID', 50, 'BTC/USDT', 20, DATE '2020-08-05', 6, 'USD', 4),
        ('TRADE_42', 'CLOSE_ORDER_04', 'ASK', 50, 'BTC/USDT', 25, DATE '2020-08-06', 5, 'USD', 4),
        -- For position 5.
        ('TRADE_51', 'OPEN_ORDER_05', 'BID', 50, 'BTC/USDT', 20, DATE '2020-08-05', 6, 'USD', 5),
        ('TRADE_52', 'CLOSE_ORDER_05', 'ASK', 50, 'BTC/USDT', 25, DATE '2020-08-06', 5, 'USD', 5),
        -- For position 6.
        ('TRADE_61', 'OPEN_ORDER_06', 'BID', 50, 'BTC/USDT', 20, DATE '2020-08-05', 6, 'USD', 6),
        ('TRADE_62', 'CLOSE_ORDER_06', 'ASK', 50, 'BTC/USDT', 25, DATE '2020-08-06', 5, 'USD', 6);
